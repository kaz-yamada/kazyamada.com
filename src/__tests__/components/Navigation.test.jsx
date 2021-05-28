import React from "react"

import { render, fireEvent, screen } from "@testing-library/react"

import Navigation from "../../components/Navigation"
import config from "../../../data/SiteConfig"
import { ThemeProvider } from "../../context/ThemeContext"

describe("Navigation bar", () => {
  test("Responsive menu button click has appopriate class", () => {
    render(<Navigation config={config} />)
    expect(screen.getByTestId("nav-root").classList).not.toContain("show-menu")

    fireEvent.click(screen.getByTestId("responsive-toggle"))
    expect(screen.getByTestId("nav-root").classList).toContain("show-menu")

    fireEvent.click(screen.getByText(config.menuLinks[0].name))
    expect(screen.getByTestId("nav-root").classList).not.toContain("show-menu")
  })

  test("Theme toggles correctly", () => {
    render(
      <ThemeProvider>
        <Navigation config={config} />
      </ThemeProvider>
    )
    expect(screen.getByText("Dark Theme: Off")).toBeTruthy()

    fireEvent.click(screen.getByTestId("theme-toggle"))
    expect(screen.getByText("Dark Theme: On")).toBeTruthy()

    fireEvent.click(screen.getByTestId("theme-toggle"))
    expect(screen.getByText("Dark Theme: Off")).toBeTruthy()
  })
})
