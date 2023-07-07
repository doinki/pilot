import type { Meta, StoryObj } from '@storybook/react';

import ImportantDevicesOutlined from '../../lib/action/ImportantDevicesOutlined';

const meta: Meta<typeof ImportantDevicesOutlined> = {
  component: ImportantDevicesOutlined,
  tags: ['autodocs'],
  title: 'action/ImportantDevicesOutlined',
};

export default meta;
type Story = StoryObj<typeof ImportantDevicesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
