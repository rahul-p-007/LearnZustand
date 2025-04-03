# 📌 Introduction to Zustand

Zustand is a small, fast, and scalable state management library for React. It provides a simple API to manage global state without the complexity of Redux or Context API.

## 🚀 Why Use Zustand?
- **Lightweight** (~1KB)
- **No Boilerplate** (Minimal setup required)
- **Fast & Efficient** (Uses React hooks efficiently to prevent unnecessary re-renders)
- **Flexible** (Supports async actions, middlewares, and custom selectors)

---

## 📦 Installation
To install Zustand, run the following command:
```sh
npm install zustand
```
Or using yarn:
```sh
yarn add zustand
```

---

## 🛠️ Creating a Store
To create a store, use the `create` function from Zustand:

```js
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
```

- `set`: A function that updates the state.
- `state.count`: The current state.
- `increase` & `decrease`: Functions to modify the state.

---

## 📌 Using Zustand in a Component
After creating the store, use it inside your React components:

```js
import React from "react";
import useCounterStore from "./store";

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
```

---

## 🔄 Avoiding Unnecessary Re-Renders
Zustand automatically optimizes rendering, but you can use **selectors** to avoid unnecessary updates:

```js
const count = useCounterStore((state) => state.count);
const increase = useCounterStore((state) => state.increase);
```
Using `shallow` comparison for multiple values:
```js
import { shallow } from "zustand/shallow";

const { count, increase } = useCounterStore(
  (state) => ({ count: state.count, increase: state.increase }),
  shallow
);
```

---

## 🎯 Async Actions in Zustand
Zustand allows **async actions** inside the store:

```js
const useUserStore = create((set) => ({
  user: null,
  fetchUser: async () => {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    set({ user: data });
  },
}));
```

Usage in a component:
```js
function UserProfile() {
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);

  return (
    <div>
      <button onClick={fetchUser}>Load User</button>
      {user && <p>Welcome, {user.name}!</p>}
    </div>
  );
}
```

---

## 🔥 Zustand Middleware
Zustand supports middleware like **logging, persistence, and devtools**.

### **📝 Using Middleware (Persist State)**
```js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    { name: "theme-storage" } // Storage key
  )
);
```

---

## 📌 Zustand vs Context API
| Feature          | Zustand                         | Context API                  |
|----------------|---------------------------------|------------------------------|
| **Re-renders** | Optimized (only updates components using state) | Causes re-renders on state changes |
| **Boilerplate** | Minimal                         | High                         |
| **Performance** | Faster, selective updates      | Slower, full re-renders      |
| **Ease of Use** | Simple API                     | Requires reducers & providers |

---

## 🎯 Conclusion
Zustand is a powerful yet simple state management library that provides better performance than Context API and is much easier to use than Redux. It is ideal for managing global state in small to medium-sized applications.

**🔥 Try Zustand and simplify your React state management today!**

