CC ?= gcc
CFLAGS := -no-pie
TARGET := run

%: %.S
	$(CC) $(CFLAGS) -o $(TARGET) $<

clean:
	rm $(TARGET)

.PHONY: clean
