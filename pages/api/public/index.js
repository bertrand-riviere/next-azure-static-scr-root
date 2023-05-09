const handler = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({
      message: 'Hello from public API',
    });
  }

  if (req.method === 'POST') {
    const reqBody = req.body;
    res.status(200).json(reqBody);
  }
};

export default handler;
