title: "Alama"

short_description: 

"Stop wasting time on manual spreadsheets and disconnected notes—Alama gives you live mass properties, design traceability, and project documentation directly in Rhino."

long_description:

## What You Get with Alama

  **Eliminate the "Excel Chasm"**  
  No more copying volumes from Rhino into spreadsheets, only to have them instantly out of date. With Alama, your 3D model and its metadata stay synchronized automatically. Change your hull shape, and your weight, center of gravity (COG), and mass properties update in real-time—no manual data entry, no errors, no rework.

  **Preserve Your Design Rationale**  
  Ever forgotten why a part was changed, or lost track of a client’s feedback? Alama lets you attach notes, decisions, and even files directly to your geometry. Your design history stays intact, so you always know *why* a change was made, by whom, and when.

  **See the Full Picture, Instantly**  
  Get a live, visual overview of your project with Alama’s web dashboard*. See mass budgets, part hierarchies, and decision logs at a glance—without leaving Rhino. Share the dashboard with your team or clients for real-time collaboration.

  **Work Smarter, Not Harder**  
  Alama is built for designers, engineers, and project managers who need traceability without the complexity. Whether you’re designing USVs, yachts, drones, or architectural facades, Alama keeps your data accurate, organized, and accessible.

---

## How Alama Helps You

### For Naval Architects & Marine Engineers

- **Automate Weight & COG Calculations**: No more manual spreadsheets—Alama calculates mass properties live as you model, so you can focus on design, not data entry.
- **Meet Class Requirements**: Link your design to ABS, Lloyd’s Register, or other certification rules, and generate audit-ready documentation with ease.
- **Track Every Change**: From hull modifications to material selections, every decision is logged and traceable.

### For Aerospace & Drone Designers

- **Stay Within Weight Budgets**: Real-time mass tracking ensures your UAV/UAS designs meet FAA or client specifications without last-minute surprises.
- **Collaborate Seamlessly**: Share live updates with your team or clients via the web dashboard* or Speckle integration*.

### For Industrial & Architectural Designers

- **Manage Complex Assemblies**: Visualize part hierarchies and dependencies in a dynamic network graph.
- **Document as You Design**: No more post-project scrambling to recreate decisions—Alama captures your rationale in real-time.

---

## Key Features

- **Live Mass Properties**: See volume, area, centroid, and mass update instantly as you model.
- **Part ID System**: Assign unique IDs to geometry for foolproof traceability, even if parts are moved or renamed.
- **Decision Log**: Attach notes, links, or files to parts to preserve context and reasoning.
- **Assembly Management**: Visualize and navigate parent-child relationships between parts.
- **Web Dashboard***: Get a real-time overview of your project’s mass budget, hierarchy, and decisions in a browser.
- **Speckle Integration***: Publish your model to Speckle with one click, and overlay Alama metadata for cloud-based sharing.
- **Compliance-Ready***: Align with ISO 9001, EIA-649, Def Stan 05-57, and other standards for audit-ready documentation.

---

  *Features marked with an asterisk (*)* are planned for future releases. See the Changelog for details.*

## Technical Requirements

- **Rhino Version**: Rhino 7, Rhino 8
- **Operating System**: Windows, macOS
- **Dependencies**:
  - RhinoCommon API
  - `rhino3dm` 
  - `specklepy`
  - Python 2.7, Python 3.9
- **Hardware**: Minimum 8GB RAM, dedicated GPU recommended for large projects.
- **Storage**: Local JSON database.

---

## Installation

1. **Download**: Install via Rhino’s Package Manager or download the `.yak` file from Food4Rhino.
2. **Install**:
  - Open Rhino and go to **Package Manager**.
  - Click **"Install from File"** and select the `.yak` file.
  - Alternatively, drag and drop the `.yak` file into Rhino.
3. **Restart Rhino**: The Alama toolbar will appear, or type `Alama` in the command line.
4. **Get Started**:
  - Open the sample Rhino file.
  - Tag a part with a **Part ID** (e.g., `P-001`).
  - Assign a material to see live mass properties.
  - Log a decision (e.g., "Reduced keel thickness to 8mm to save 12kg").
  - Open the **Web Dashboard** to see your project’s hierarchy and mass budget.

---

## License

- **Community Edition**: Free for local, single-user use (Proprietary License).
- **Professional Edition***: Cloud sync, version history, and team collaboration.
- **Enterprise***: Custom pricing for on-premise hosting and advanced compliance features.

---

## Support

- **Documentation**: [GitHub Wiki](https://github.com/your-repo/alama/wiki)
- **Community**:
  - [GitHub Discussions](https://github.com/your-repo/alama/discussions) for questions and feature requests.
  - [Discord Server](https://discord.gg/your-invite-link) for real-time help.
- **Email**: [support@bluetern.eu](mailto:support@bluetern.eu)
- **Bug Reporting**: Use GitHub Issues or the built-in crash reporter (opt-out, no PII collected).

---

## Changelog

- **v1.0.0 (Upcoming)**: Initial release with Part IDs, live mass properties, decision logging, and local JSON database.
- **v1.0.1 (Planned)**: Schema validation, backup/restore, and improved error handling.
- **v1.1.0 (Roadmap)**: Cloud sync, and web dashboard*.

---

## Credits

- **Developed by**: Blue Tern(https://bluetern.eu) (Willem Van der Voort, Christoph Evers).
- **Inspired by**: Real-world pain points from naval architects, drone designers, and engineers tired of manual spreadsheets.
- **Built with**: RhinoCommon, Python, Eto.Forms, Speckle API.
- **Special Thanks**: Early adopters from USV startups, marine engineering schools, and the Rhino community.

category: "Productivity, Data Management, Design Tools"

tags: "CAD, traceability, design decisions, weight management, Rhino 7, Rhino 8, Grasshopper, marine engineering, naval architecture, USV, UAV, ISO 9001, compliance, documentation"

version: "1.0.0"

rhino_versions: "7, 8"

os_compatibility: "Windows, macOS"

license: "Proprietary"

website: "[https://bleutern.eu/alama](https://bleutern.eu/alama)"

repository: "[https://github.com/your-repo/alama](https://github.com/your-repo/alama)"

support_email: "[support@bbluetern.eu](mailto:support@bluetern.eu)"

icon: "[Upload: Alama logo (256x256 PNG)]"

screenshots: |

- [Upload: Plugin UI showing Part ID assignment and live mass properties]
- [Upload: Web dashboard with project hierarchy and COG visualization]
- [Upload: Rhino viewport with mass property overlay]
- [Upload: Decision log linked to a hull component]
- [Upload: Speckle viewer with Alama metadata overlay]

video_demo: "[Upload/Link: 2-3 minute Loom video showing how to tag parts, log decisions, and view live mass properties]"

author: "Blue Tern"

author_email: "[support@bluetern.eu](mailto:willem@bleutern.eu)"

author_website: "[https://bluetern.eu/alama](https://bleutern.eu)"

price: "Free (Community Edition), TBD (Professional Edition*)"

download_link: "[To be generated by Food4Rhino]"

package_manager: "Yes (published via Yak for Rhino Package Manager)"