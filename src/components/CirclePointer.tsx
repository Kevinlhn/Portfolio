import { useEffect } from "react";

const CirclePointer = () => {
  useEffect(() => {
    // Create the circle pointer element
    const pointer = document.createElement("div");
    pointer.id = "circle-pointer";
    const innerCircle = document.createElement("div");
    innerCircle.id = "inner-circle";
    pointer.appendChild(innerCircle);
    document.body.appendChild(pointer);

    // Add styles dynamically
    const styles = document.createElement("style");
    styles.innerHTML = `
      #circle-pointer {
        position: fixed;
        width: 20px;
        height: 20px;
        border: 1px solid;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 1000;
        display: none; /* Hidden by default */
      }

      #inner-circle {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2.5px solid;
        border-radius: 50%;
        transition: transform 0.15s ease, opacity 0.15s ease;
      }

      @media (hover: none) and (pointer: coarse) {
        #circle-pointer {
          display: none; /* Hide on touch devices */
        }
      }
    `;
    document.head.appendChild(styles);

    const supportsHover = window.matchMedia("(hover: hover)").matches;

    if (supportsHover) {
      pointer.style.display = "block";

      // Variables to track pointer position
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;

      // Update mouse position on mousemove
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      // Animate the pointer to chase the cursor
      const animatePointer = () => {
        currentX += (mouseX - currentX) * 0.2; // Smooth interpolation
        currentY += (mouseY - currentY) * 0.2;

        pointer.style.left = `${currentX}px`;
        pointer.style.top = `${currentY}px`;

        requestAnimationFrame(animatePointer); // Repeat animation
      };

      // Add click animation
      const handleClick = () => {
        innerCircle.style.transform = "scale(1.5)";
        innerCircle.style.opacity = "0.5";

        setTimeout(() => {
          innerCircle.style.transform = "scale(1)";
          innerCircle.style.opacity = "1";
        }, 150);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("click", handleClick);
      animatePointer(); // Start the animation loop

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
        pointer.remove();
        styles.remove();
      };
    }
  }, []);

  return null; // No JSX needed; this is purely for functionality
};

export default CirclePointer;