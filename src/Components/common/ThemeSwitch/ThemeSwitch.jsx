import { useTheme } from "next-themes";

// Do NOT use this! It will throw a hydration mismatch error.
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="select w-full max-w-xs bg-base-200  border border-base-300"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="cupcake">Cupcake</option>
      <option value="bumblebee">Bumblebee</option>
      <option value="emerald">Emerald</option>
      <option value="corporate">Corporate</option>
      <option value="synthwave">Synthwave</option>
      <option value="retro">Retro</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="valentine">Valentine</option>
      <option value="halloween">Halloween</option>
      <option value="garden">Garden</option>
      <option value="forest">Forest</option>
      <option value="aqua">Aqua</option>
      <option value="lofi">Lofi</option>
      <option value="pastel">Pastel</option>
      <option value="fantasy">Fantasy</option>
      <option value="wireframe">Wireframe</option>
      <option value="black">Black</option>
      <option value="luxury">Luxury</option>
      <option value="dracula">Dracula</option>
      <option value="cmyk">Cmyk</option>
      <option value="autumn">Autumn</option>
      <option value="business">Business</option>
      <option value="acid">Acid</option>
      <option value="lemonade">Lemonade</option>
      <option value="night">Night</option>
      <option value="coffee">Coffee</option>
      <option value="winter">Winter</option>
      <option value="dim">Dim</option>
      <option value="nord">Nord</option>
      <option value="sunset">Sunset</option>
    </select>
  );
};

export default ThemeSwitch;
