import type { Meta, StoryObj } from '@storybook/react';

import NineteenMpOutlined from '../../lib/image/NineteenMpOutlined';

const meta: Meta<typeof NineteenMpOutlined> = {
  component: NineteenMpOutlined,
  tags: ['autodocs'],
  title: 'image/NineteenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof NineteenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
