import type { Meta, StoryObj } from '@storybook/react';

import PlusOneOutlined from '../../lib/social/PlusOneOutlined';

const meta: Meta<typeof PlusOneOutlined> = {
  component: PlusOneOutlined,
  tags: ['autodocs'],
  title: 'social/PlusOneOutlined',
};

export default meta;
type Story = StoryObj<typeof PlusOneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
