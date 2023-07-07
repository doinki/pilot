import type { Meta, StoryObj } from '@storybook/react';

import FindInPageOutlined from '../../lib/action/FindInPageOutlined';

const meta: Meta<typeof FindInPageOutlined> = {
  component: FindInPageOutlined,
  tags: ['autodocs'],
  title: 'action/FindInPageOutlined',
};

export default meta;
type Story = StoryObj<typeof FindInPageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
