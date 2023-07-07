import type { Meta, StoryObj } from '@storybook/react';

import KayakingOutlined from '../../lib/social/KayakingOutlined';

const meta: Meta<typeof KayakingOutlined> = {
  component: KayakingOutlined,
  tags: ['autodocs'],
  title: 'social/KayakingOutlined',
};

export default meta;
type Story = StoryObj<typeof KayakingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
