# SMARQ Project – Folder Structure

This document reflects the implemented folder structure. Existing components are preserved.

```
smarq/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   ├── main.jsx
│   │
│   ├── assets/
│   │   ├── backgrounds/
│   │   │   └── circuit-pattern.svg
│   │   └── logo/
│   │       └── SMARQLogo.png
│   │
│   ├── components/                    # Global shared UI
│   │   ├── AppLogo.jsx
│   │   ├── TopRightActions.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── index.js
│   │
│   ├── modules/
│   │   ├── AdminLayout/
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── index.js
│   │   │   ├── api/
│   │   │   │   ├── dashBoardData.data.jsx
│   │   │   │   └── index.js
│   │   │   └── component/
│   │   │       ├── AdminDashBoard.jsx
│   │   │       ├── index.js
│   │   │       └── styles/
│   │   │           └── AdminDashboard.css
│   │   │
│   │   ├── package/
│   │   │   ├── PackagesMain.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── smarq/
│   │   │   ├── index.js
│   │   │   ├── SmarqMain.jsx          # re-exports SmarqMainContainer
│   │   │   ├── ProjectDetail.jsx
│   │   │   ├── container/
│   │   │   │   ├── SmarqMainContainer.jsx  # data logic, hooks
│   │   │   │   ├── SmarqMain.jsx            # presentational UI
│   │   │   │   └── index.js
│   │   │   ├── data/
│   │   │   │   └── projectsData.js
│   │   │   ├── styles/
│   │   │   │   └── SmarqProjectHub.css
│   │   │   ├── components/            # smarq-specific (existing)
│   │   │   │   ├── ProjectHubHeader.jsx
│   │   │   │   ├── ProjectListPanel.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── CreateProjectCard.jsx
│   │   │   │   ├── ArchiveSection.jsx
│   │   │   │   ├── UtilityBar.jsx
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── routes/
│   │   │   │   ├── SmarqRoutes.jsx
│   │   │   │   ├── ProjectRoutes.jsx
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── layouts/
│   │   │   │   ├── SmarqLayout.jsx
│   │   │   │   ├── ProjectLayout.jsx
│   │   │   │   └── index.js
│   │   │   │
│   │   │   ├── shared/
│   │   │   │   ├── api/
│   │   │   │   ├── hooks/
│   │   │   │   ├── components/
│   │   │   │   └── constants/
│   │   │   │
│   │   │   └── features/
│   │   │       ├── project-list/
│   │   │       │   ├── routes/, pages/, container/, context/
│   │   │       │   ├── hooks/, api/, components/
│   │   │       │   └── features/ (filters, archive, preview)
│   │   │       ├── project-detail/
│   │   │       │   ├── pages/, container/, hooks/, api/, components/
│   │   │       │   └── index.js
│   │   │       └── project-settings/
│   │   │           ├── pages/, container/, hooks/, api/
│   │   │           └── index.js
│   │   │
│   │   ├── smiley/
│   │   ├── smrSettings/
│   │   └── support/
│   │
│   ├── shared/
│   │   ├── DashboardCard.jsx
│   │   └── index.js
│   │
│   ├── store/
│   ├── theme/
│   └── ...
```
