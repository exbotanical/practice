CC ?= gcc
CFLAGS := -no-pie
TARGET := run

%: %.s
	$(CC) $(CFLAGS) -o $(TARGET) $<

clean:
	rm $(TARGET)

.PHONY: clean
