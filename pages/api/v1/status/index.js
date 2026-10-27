function status(request, response) {
  response.status(200).json({ status: "pessoas acima da média" });
}

export default status;
