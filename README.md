# React Patterns

This repository demonstrates advanced **React design patterns** including **Compound Components**, **Render Props**, and **Debouncing**, implemented in a simple Vite + React setup.

It’s meant as a **learning resource** and a **reference project** for developers who want to understand and apply these patterns in real-world applications.

---

## 🚀 Features

- **Compound Components** – Build flexible APIs where the parent manages state and child components consume it.  
- **Render Props** – Share reusable stateful logic while leaving rendering control to the user.  
- **Debouncing** – Optimize performance by reducing unnecessary re-renders or API calls while typing.

---

## 📸 Demo / Screenshots

### Compound Components (Toggle Example)
<img src="./docs/toggle-demo.gif" alt="Compound Components Demo" width="500" />

---

### Render Props (DataFetcher Example)
<img src="./docs/render-props-demo.png" alt="Render Props Demo" width="500" />

---

### Debouncing (Search Input Example)
<img src="./docs/debounce-demo.gif" alt="Debounce Demo" width="500" />

👉 Place your screenshots or GIFs inside a `docs/` folder (or `/assets`) and update the file paths above.

---

## 📂 Project Structure

```

react-patterns/
├── src/
│   ├── components/
│   │   ├── Compound/        # Compound Components pattern
│   │   ├── RenderProps/     # Render Props pattern
│   │   └── Debounce/        # Debouncing pattern
│   ├── hooks/               # Custom hooks like useDebounce
│   ├── App.jsx              # Main entry component
│   └── main.jsx             # ReactDOM entry
├── public/
├── docs/                    # Screenshots and GIFs for README
├── package.json
├── vite.config.js
└── README.md

````

---

## ⚡ Getting Started

### Prerequisites
- Node.js (>= 14)
- npm or yarn

### Installation

```bash
git clone https://github.com/AqibNiazi/react-patterns.git
cd react-patterns
npm install
````

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🧩 Patterns Implemented

### 1. Compound Components

A flexible way to build UI components that share implicit state.
Example:

```jsx
<Toggle>
  <Toggle.Button />
  <Toggle.Panel>
    This content is conditionally visible
  </Toggle.Panel>
</Toggle>
```

---

### 2. Render Props

A technique to **share logic without coupling UI**.
Example:

```jsx
<DataFetcher url="/api/destinations">
  {({ data, loading, error }) => (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {data && data.map(item => <p key={item.id}>{item.name}</p>)}
    </div>
  )}
</DataFetcher>
```

---

### 3. Debouncing

Prevents expensive operations (like API calls) from firing too often.

Usage in a search input:

```jsx
const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 300);

useEffect(() => {
  if (debouncedQuery) {
    // API call with debounced query
  }
}, [debouncedQuery]);

<input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search..."
/>
```

---

## 🤝 Contributing

Contributions are welcome!
You can add new patterns (like **Higher-Order Components**, **State Reducers**, **Portals**, etc.), improve documentation, or suggest better examples.

Steps:

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-pattern`
3. Commit your changes
4. Push to the branch: `git push origin feature/my-pattern`
5. Open a pull request

---

## 📜 License

MIT License © 2025 [Aqib Niazi](https://github.com/AqibNiazi)

---

## ⭐ Support

If you found this helpful, consider giving the repository a ⭐ on GitHub!

```

