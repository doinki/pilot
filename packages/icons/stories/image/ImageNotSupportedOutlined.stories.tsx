import type { Meta, StoryObj } from '@storybook/react';

import ImageNotSupportedOutlined from '../../lib/image/ImageNotSupportedOutlined';

const meta: Meta<typeof ImageNotSupportedOutlined> = {
  component: ImageNotSupportedOutlined,
  tags: ['autodocs'],
  title: 'image/ImageNotSupportedOutlined',
};

export default meta;
type Story = StoryObj<typeof ImageNotSupportedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
