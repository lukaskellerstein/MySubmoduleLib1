all: clean build copy


clean: 
	rm -rf ../MySubmoduleLib1-out/*
	
build:
	cd ui-components-app; \
	yarn; \
	yarn run build:library

copy: 
	cp -R ./ui-components-app/dist/ui-components/* ../MySubmoduleLib1-out/