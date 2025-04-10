# 1. Crea la cartella principale e spostati dentro
mkdir tua-cartella && cd tua-cartella

# 2. Crea il progetto React+TS con Vite in una sotto-cartella
npm create vite@latest nome-progetto --template react-ts

# 3. Vai nella cartella del progetto
cd nome-progetto

# 4. Installa le dipendenze
npm install

# 5. Aggiungi Storybook (con supporto React e TypeScript)
npx storybook@latest init

# 6. Avvia Storybook per verificarne il funzionamento
npm run storybook 