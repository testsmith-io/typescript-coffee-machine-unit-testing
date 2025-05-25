# ☕ TypeScript Coffee Machine Simulator

A fully test-covered, mutation-tested **Coffee Machine Simulator** written in **TypeScript**. This project uses **Vitest** for unit testing, **Stryker** for mutation testing, and follows solid object-oriented design principles.

---

## 🚀 Features

✅ Supports multiple coffee types:  
→ `Espresso`, `Latte`, `Cappuccino`, `Macchiato`, `Double Espresso`, `Coffee`  
✅ Abstract reservoir logic for `water`, `beans`, and `milk`  
✅ Custom exceptions for resource shortages  
✅ Fully type-safe with **strict TypeScript configuration**  
✅ Mutation testing with **Stryker**  
✅ Modern build and testing setup with `tsc`, `vitest`, and `stryker`

---

## 📁 Project Structure

```

coffee-machine-ts/
├── src/
│   ├── enums/
│   │   └── CoffeeType.ts                # Enum for coffee types and their recipes
│   ├── exceptions/                      # Custom exception classes
│   ├── models/                          # Reservoirs and abstractions
│   └── CoffeeMachine.ts                 # Main business logic
├── tests/
│   └── CoffeeMachine.test.ts            # Vitest unit tests
├── dist/                                # Transpiled output (after build)
├── tsconfig.json                        # TypeScript config
├── vitest.config.ts                     # Vitest config
├── stryker.conf.json                    # Mutation testing config
├── package.json                         # Dependencies & scripts
└── README.md                            # Project documentation

````

---

## 🧪 Testing & Quality

### ✅ Run Unit Tests

```bash
npm install
npm run test
````

### 🔁 Watch Mode (during development)

```bash
npm run test:watch
```

### 🧬 Run Mutation Tests (Stryker)

```bash
npm run mutation
```

Reports will be generated under `reports/mutation/mutation.html`.

---

## ☕ Coffee Menu

| Coffee Type     | Water (ml) | Beans (g) | Milk (ml) |
| --------------- | ---------- | --------- | --------- |
| Espresso        | 100        | 30        | 0         |
| Double Espresso | 150        | 40        | 0         |
| Coffee          | 200        | 20        | 0         |
| Latte           | 150        | 20        | 100       |
| Cappuccino      | 100        | 25        | 150       |
| Macchiato       | 100        | 15        | 50        |

---

## 🧱 Design Patterns & Principles

* **Encapsulation & Abstraction:** Abstract base class for reservoirs
* **Enum Mapping:** CoffeeType enum with associated recipe values
* **Custom Errors:** `InsufficientWaterException`, `InsufficientBeansException`, etc.
* **Testability:** Dependency injection for reservoirs, Vitest-friendly architecture
* **Mutation Testing:** Guarantees test quality via Stryker

---

## 📦 Scripts Summary

| Script               | Description                           |
| -------------------- | ------------------------------------- |
| `npm run test`       | Run all unit tests (Vitest)           |
| `npm run test:watch` | Watch and re-run tests on file change |
| `npm run mutation`   | Run mutation tests (Stryker)          |

---

## 🔧 Requirements

* Node.js ≥ 22
* npm ≥ 10
* TypeScript ≥ 5
* Vitest
* Stryker
