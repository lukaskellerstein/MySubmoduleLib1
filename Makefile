all: clean build copy

build:
	cd ui-components-app; \
	yarn; \
	yarn run build:library
clean: 
	rm -rf ../MySubmoduleLib1-out/*
copy: 
	cp -R ./ui-components-app/dist/ui-components/* ../MySubmoduleLib1-out/