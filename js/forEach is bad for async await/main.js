const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
  useForEach(ids);
};

const getPost = async (id) => {
  return await (
    await fetch(`https://jsonplaceholder.typicode.com/post/${id}`)
  ).json();
};

/*
제대로 동작못함
*/
const useForEach = (ids) => {
  ids.forEach(async (id) => {
    const data = await getPost(id);
    console.log(data);
  });
};

/*
제대로 동작못함
*/
const useForEach2 = async (ids) => {
  await ids.forEach(async (id) => {
    const data = await getPost(id);
    console.log(data);
  });

  console.log(`waiting`);
};

initApp();

// solution

// 1. traditional for loop
const getPostsSerialized = async (ids) => {
  for (let i = 0; i < ids.length; i++) {
    const data = await getPost(ids[i]);
    console.log(data);
  }
  console.log(`waiting`);
};

// 2. modern js better than 1
const getPostsSerialized2 = async (ids) => {
  for (const id of ids) {
    const data = await getPost(id);
    console.log(data);
  }
  console.log(`waiting`);
};

// 3. promise.all
const getPostsConcurrently = async (ids) => {
  const posts = await Promise.all(
    ids.map(async (id) => {
      getPost(id);
    })
  );
  console.log(posts);
  console.log(`waiting`);
};

// 4. reduce
const getPostsSerialized3 = async (ids) => {
  await ids.reduce(async (acc, id) => {
    await acc; //previous thing
    const post = await getPost(id);
    console.log(post);
  }, Promise.resolve());
  console.log(`waiting`);
};
