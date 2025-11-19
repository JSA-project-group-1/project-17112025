import axios from 'axios';
axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/';

export async function fetchCategories(filter = 'Muscles', page = '1', limit = '12') {
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

export async function fetchExercises(bodypart,
  muscles,
  equipment,
  keyword,
  page = 1,
  limit = 10,) {
  const response = await axios.get(
    `/exercises`, {
    params: {
      bodypart,
      muscles,
      equipment,
      keyword,
      page,
      limit,
    }
  }
  )
  return response.data;
}

// https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
// https://your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10