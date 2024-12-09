import { useEffect, useState } from "react";
import {
  Heading,
  Container,
  Card,
  Text,
  Box,
  HStack,
  Image,
  Spinner,
} from "@chakra-ui/react";

// TypeScript type for the "Now Playing" state
interface NowPlaying {
  name: string;
  artist: string;
  album: string;
  image: string;
}

export const AboutCard = () => {
  const CLIENT_ID = "your_spotify_client_id";
  const CLIENT_SECRET = "your_spotify_client_secret";  // Keep it safe (see note)
  const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
  const TOKEN_KEY = "spotifyAccessToken";

  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch the currently playing song from your account
  const fetchCurrentlyPlaying = async (accessToken: string) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.ok) {
        const data = await response.json();
        setNowPlaying({
          name: data.item.name,
          artist: data.item.artists.map((artist: any) => artist.name).join(", "),
          album: data.item.album.name,
          image: data.item.album.images[0].url,
        });
      } else {
        setNowPlaying(null); // No active song
      }
    } catch (error) {
      console.error("Error fetching currently playing song:", error);
      setNowPlaying(null);
    } finally {
      setLoading(false);
    }
  };

  // Authenticate and get the token
  const getSpotifyAccessToken = async () => {
    // Check if token already exists in localStorage
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      fetchCurrentlyPlaying(token);
      return;
    }

    // Client credentials flow to get the token
    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    body.append("client_id", CLIENT_ID);
    body.append("client_secret", CLIENT_SECRET);

    try {
      const tokenResponse = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;
      localStorage.setItem(TOKEN_KEY, accessToken); // Store the token in localStorage
      fetchCurrentlyPlaying(accessToken);
    } catch (error) {
      console.error("Error obtaining access token:", error);
    }
  };

  useEffect(() => {
    getSpotifyAccessToken();
  }, []);

  return (
    <Container centerContent position="relative" height="100vh">
      {/* Animated Card for the Heading */}
      <Card shadow={""} p={5} borderRadius={70} mt={"20vh"}>
        <Heading
          px={5}
          size={"xl"}
          fontWeight="extrabold"
          letterSpacing="wide"
          lineHeight="1.2"
        >
          Hi there, I'm Kevin.
        </Heading>
      </Card>

      <Box p={5} mt={"5vh"}>
        <Text letterSpacing={"wide"} fontSize={"1.5vh"}>
          I’m a computer engineer and developer based in{" "}
          <Text as="span" fontWeight="extrabold" color="blue.500">
            Washington, United States
          </Text>
          . I’m passionate about{" "}
          <Text as="span" fontWeight="extrabold" color="red.500">
            software development
          </Text>
          , with a strong interest in{" "}
          <Text as="span" fontWeight="extrabold" color="yellow.500">
            front-end design and UI/UX
          </Text>
          , but I'm always eager to contribute on any tech projects that bring
          value and make a difference. Though I was born in the US, my family
          is from{" "}
          <Text as="span" fontWeight="extrabold" color="green.500">
            Mexico
          </Text>
          , and I take pride in celebrating my Hispanic heritage, especially
          through its amazing food. Outside, you’ll often find me behind a
          camera, indulging my passion for{" "}
          <Text as="span" fontWeight="extrabold" color="purple.400">
            photography
          </Text>
          . I love capturing meaningful moments and experimenting with editing
          to bring my vision to life. And after a productive day, nothing beats
          enjoying a slice of pizza with{" "}
          <Text as="span" fontWeight="extrabold" color="cyan.500">
            my husky, Mia
          </Text>
          , who’s always nearby, making life brighter (and sneaking a slice
          whenever she can).
        </Text>
      </Box>

      {/* Spotify "Now Playing" widget */}
      <Box mt={10} textAlign="center">
        {loading ? (
          <Spinner size="lg" />
        ) : nowPlaying ? (
          <Card p={5} shadow="md" borderRadius={10}>
            <HStack spacing={5}>
              <Image
                src={nowPlaying.image}
                alt={`${nowPlaying.album} cover`}
                boxSize="100px"
                borderRadius={5}
              />
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {nowPlaying.name}
                </Text>
                <Text fontSize="md" color="gray.600">
                  {nowPlaying.artist}
                </Text>
                <Text fontSize="sm" color="gray.400">
                  Album: {nowPlaying.album}
                </Text>
              </Box>
            </HStack>
          </Card>
        ) : (
          <Text fontSize="lg">No song currently playing.</Text>
        )}
      </Box>
    </Container>
  );
};