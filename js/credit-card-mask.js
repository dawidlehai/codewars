function maskify(cc) {
  if (cc.length < 5) return cc;
  const hashed = [...cc];

  for (let i = 0; i < cc.length; i++) {
    if (i === cc.length - 4) break;
    hashed[i] = "#";
  }

  return hashed.join("");
}

module.exports = maskify;
