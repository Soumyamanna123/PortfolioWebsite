'use client';

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const Skills = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engine = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const skillElementsRef = useRef<{ body: Matter.Body; div: HTMLDivElement }[]>([]);
  let walls: Matter.Body[] = [];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
    backend: ["Node.js", "Express", "Docker", "AWS", "GraphQL"],
    database: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"],
  };

  useEffect(() => {
    if (!sceneRef.current) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    engine.current = Engine.create();
    const world = engine.current.world;
    world.gravity.y = 0.2;

    const width = sceneRef.current.clientWidth;
    const height = 450;

    renderRef.current = Render.create({
      element: sceneRef.current,
      engine: engine.current,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        showSleeping: false,
      },
    });

    renderRef.current.canvas.style.position = "absolute";
    renderRef.current.canvas.style.zIndex = "0";
    renderRef.current.canvas.style.pointerEvents = "auto";

    Render.run(renderRef.current);

    const runner = Runner.create();
    Runner.run(runner, engine.current);

    const ground = Bodies.rectangle(width / 2, height, width, 20, {
      isStatic: true,
      render: { visible: false },
    });

    walls = [
      Bodies.rectangle(0, height / 2, 20, height, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(width, height / 2, 20, height, {
        isStatic: true,
        render: { visible: false },
      }),
    ];

    Composite.add(world, [ground, ...walls]);

    const bodies = [];
    const borderColors = {
      frontend: "#fff",
      backend: "#fff",
      database: "#fff",
    };

    Object.entries(skills).forEach(([category, items], catIndex) => {
      items.forEach((skill, skillIndex) => {
        const body = Bodies.rectangle(
          150 + catIndex * 250,
          80 + skillIndex * 60,
          120,
          45,
          {
            label: `${category}|${skill}`,
            chamfer: { radius: 10 },
            render: { visible: false },
            friction: 0.1,
            restitution: 0.6,
          }
        );
        bodies.push(body);
      });
    });

    Composite.add(world, bodies);

    skillElementsRef.current = bodies.map((body) => {
      const div = document.createElement("div");
      const [category, skill] = body.label.split("|");
      const borderColor =
        borderColors[category as keyof typeof borderColors] || "#ffffff";

      div.textContent = skill;
      div.style.position = "absolute";
      div.style.width = "120px";
      div.style.height = "45px";
      div.style.backgroundColor = "black";
      div.style.color = "rgba(255, 255, 255, 0.6)";
      div.style.border = `1px solid ${borderColor}`;
      div.style.borderRadius = "20px";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";
      div.style.fontWeight = "bold";
      div.style.fontSize = window.innerWidth < 640 ? "10px" : "14px";
      div.style.cursor = "grab";
      div.style.userSelect = "none";
      div.style.zIndex = "10";
      div.style.pointerEvents = "none";

      sceneRef.current?.appendChild(div);

      return { body, div };
    });

    const mouse = Mouse.create(renderRef.current.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);
    renderRef.current.mouse = mouse;

    const updatePositions = () => {
      skillElementsRef.current.forEach(({ body, div }) => {
        div.style.left = `${body.position.x - 60}px`;
        div.style.top = `${body.position.y - 30}px`;
        div.style.transform = `rotate(${body.angle}rad)`;
      });
    };

    Matter.Events.on(engine.current, "afterUpdate", updatePositions);
    updatePositions();

    const handleResize = () => {
      if (!sceneRef.current || !renderRef.current) return;

      const newWidth = sceneRef.current.clientWidth;
      renderRef.current.canvas.width = newWidth;
      renderRef.current.options.width = newWidth;
      renderRef.current.bounds.max.x = newWidth;

      Composite.remove(world, walls);

      walls = [
        Bodies.rectangle(0, height / 2, 20, height, {
          isStatic: true,
          render: { visible: false },
        }),
        Bodies.rectangle(newWidth, height / 2, 20, height, {
          isStatic: true,
          render: { visible: false },
        }),
      ];

      Composite.add(world, walls);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      Matter.Events.off(engine.current!, "afterUpdate", updatePositions);
      Render.stop(renderRef.current!);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine.current!);
      skillElementsRef.current.forEach(({ div }) => div.remove());
      skillElementsRef.current = [];
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative w-full rounded-2xl overflow-hidden bg-[#0d0d0d]"
      style={{ height: "450px", minHeight: "350px" }}
    >
      {/* Matter.js Canvas & Skills */}
    </div>
  );
};

export default Skills;