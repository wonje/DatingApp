# Phase 1: Build API
FROM microsoft/dotnet:2.1-sdk AS publish
WORKDIR /app
COPY . .
RUN dotnet build ./*.csproj
RUN dotnet publish ./*.csproj -c Release -o ./out

# Phase 2: Run API with NGINX
FROM microsoft/dotnet:2.1-aspnetcore-runtime
RUN apt-get update && apt-get install -y nginx
WORKDIR /published/api
COPY --from=publish /app/out .
COPY startup.sh .
RUN chmod 755 /published/api/startup.sh
RUN apt-get install dos2unix
RUN dos2unix /published/api/startup.sh
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/
ENV ASPNETCORE_URLS http://*:5000
EXPOSE 80
CMD ["sh", "/published/api/startup.sh"]
