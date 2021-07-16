
export const PrependBody = () => {
  const GOOGLE_MAP_API_KEY = ""

  return (
    <>
      {GOOGLE_MAP_API_KEY && <script type='text/javascript' src={`https://maps.google.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`} />}
      <link href='https://use.fontawesome.com/releases/v5.15.3/css/all.css' rel='stylesheet' />
    </>
  )
}
export default PrependBody
