const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE',
  );

  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Hello from protected API',
    });
  }
};

export default handler;
