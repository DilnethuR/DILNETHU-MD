FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/DilnethuR/DILNETHU-MD /root/DilnethuR
WORKDIR /root/DilnethuR/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
