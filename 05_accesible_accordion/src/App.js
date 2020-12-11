import React from "react";
import { Accordion } from "./components/Accordion";
import "./styles.css";

const children = [
  {
    title: "Why should accessibility be top of mind for every web dev?",
    body: (
      <>
        As web designer <a href="https://www.cindyli.com/">Cindy Li</a> once
        said, "We're all just temporarily abled." According to the WHO, around
        15% of our population lives with some kind of disability, and the number
        increases with every age bracket. There are four main categories of
        disabilities, and each of them requires specific tools for the disabled
        user to be able to take full advantages of websites.
        <ul>
          <li>
            <strong>Visual disability</strong> - users may use screen readers,
            braille readers, zoom, or high contrast settings
          </li>
          <li>
            <strong>Motor disability</strong> - users may use voice commands,
            switches, or eye / head scanning tools for navigation
          </li>
          <li>
            <strong>Hearing</strong> - users rely on transcriptions and visual
            cues
          </li>
          <li>
            <strong>Cognitive</strong> - users benefit from clear information
            hierarchy
          </li>
        </ul>
      </>
    )
  },
  {
    title: "Why is accessibility a win win for everyone?",
    body: (
      <>
        <ul>
          <li>
            <strong>Better sales opportunities</strong> - wider range of
            potential customers and less negative feedback{" "}
          </li>
          <li>
            <strong>Not getting sued!</strong> - the Americans with Disabilities
            act has spurred many lawsuits related to claims that websites aren't
            accessible
          </li>
        </ul>
      </>
    )
  },
  {
    title: "What are ingredients for an accessible component / app?",
    body: (
      <>
        <ul>
          <li>
            <strong>Semantic HTML</strong> - structuring your app with semantic
            markup so that screen readers understand the important of each
            element better
          </li>
          <li>
            <strong>Aria attributes</strong> - (selectively) using aria
            attributes like "role" to convey the relationship between related
            elements to screen readers
          </li>
          <li>
            <strong>Keyboard navigation</strong> - allowing users to navigate
            your app using just their keyboard is great for everyone but
            especially for users with visual or motor impairment (bonus: if your
            HTML is semantic, you shouldn't need tabindex in most cases!)
          </li>
          <li>
            <strong>Focus management</strong> - links, inputs or buttons with
            focus should visually look different to express their diferent state
          </li>
        </ul>
      </>
    )
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to our Accordion!</h1>
      <Accordion children={children} />
    </div>
  );
}
