import INavBarTitle from './INavBarTitle'
const INavBar = () => {
  return (
    <header className="sticky top-0 border-b border-[#fbfbfd]/50 backdrop-blur-[10px]">
      <div className="px-8">
        <INavBarTitle>MasonFu</INavBarTitle>
      </div>
    </header>
  )
}
export default INavBar
