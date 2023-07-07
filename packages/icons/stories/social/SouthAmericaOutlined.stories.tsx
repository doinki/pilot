import type { Meta, StoryObj } from '@storybook/react';

import SouthAmericaOutlined from '../../lib/social/SouthAmericaOutlined';

const meta: Meta<typeof SouthAmericaOutlined> = {
  component: SouthAmericaOutlined,
  tags: ['autodocs'],
  title: 'social/SouthAmericaOutlined',
};

export default meta;
type Story = StoryObj<typeof SouthAmericaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
