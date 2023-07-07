import type { Meta, StoryObj } from '@storybook/react';

import WbSunnyOutlined from '../../lib/image/WbSunnyOutlined';

const meta: Meta<typeof WbSunnyOutlined> = {
  component: WbSunnyOutlined,
  tags: ['autodocs'],
  title: 'image/WbSunnyOutlined',
};

export default meta;
type Story = StoryObj<typeof WbSunnyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
