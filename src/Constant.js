

//  const GOOGLE_API_KEY="AIzaSyB2WQr9eR8g8m4AT-gO-SXFEnzS8IMbjpY"
 export const GOOGLE_API_KEY="AIzaSyB2WQr9eR8g8m4AT-gO-SXFEnzS8IMbjpY"


export const YOUTUBE_URL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const SEARCH_SUGGESTION_API ="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const USER_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBLMyaL-5gh0nhP-vircgmtkHER58KHoMAw&s"

export const LIVE_CHAT_SIZE = 200;

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=YOURAPIKEY

// export const API_RESULT_SEARCH_BY_KEYWORD ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="
export const API_RESULT_SEARCH_BY_KEYWORD ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+GOOGLE_API_KEY+"&q="