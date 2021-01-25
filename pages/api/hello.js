// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    public: process.env.NEXT_PUBLIC_URI,
    branch: process.env.NEXT_PUBLIC_BRANCH || null,
    secret: process.env.SECRET
  })
}
