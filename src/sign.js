import jsonwebtoken from 'jsonwebtoken'

const jwtOptions = {
  expiresIn: 300,
  algorithm: 'ES512',
  audience: 'contracts.stem.is',
  issuer: 'contracts.stem.is',
}

console.log(jsonwebtoken.sign({user: 'matt'}, process.env.JWT_SECRET, jwtOptions))

