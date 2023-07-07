import type { Meta, StoryObj } from '@storybook/react';

import StarBorderOutlined from '../../lib/toggle/StarBorderOutlined';

const meta: Meta<typeof StarBorderOutlined> = {
  component: StarBorderOutlined,
  tags: ['autodocs'],
  title: 'toggle/StarBorderOutlined',
};

export default meta;
type Story = StoryObj<typeof StarBorderOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
