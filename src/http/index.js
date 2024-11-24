import ky from 'ky';

const http = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE,
});

export { http };
