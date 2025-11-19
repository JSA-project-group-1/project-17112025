import axios from 'axios';
axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/';

export default async function fetchList(filter = 'Muscles', page = '1', limit = '12') {
  console.log(limit)
  const response = await axios.get(
    `/filters`, {
    params: {
      filter,
      page,
      limit,
    }
  }
  )
  return response.data;
}


// https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
// https://your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10