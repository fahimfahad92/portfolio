import SocialIconsComponent from "./components/icons/icon-component";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 max-w-full h-16 bg-black text-white">
        <SocialIconsComponent />
      </div>
    </>
  );
}
