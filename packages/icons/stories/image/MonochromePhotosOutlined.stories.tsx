import type { Meta, StoryObj } from '@storybook/react';

import MonochromePhotosOutlined from '../../lib/image/MonochromePhotosOutlined';

const meta: Meta<typeof MonochromePhotosOutlined> = {
  component: MonochromePhotosOutlined,
  tags: ['autodocs'],
  title: 'image/MonochromePhotosOutlined',
};

export default meta;
type Story = StoryObj<typeof MonochromePhotosOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
