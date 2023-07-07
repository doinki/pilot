import type { Meta, StoryObj } from '@storybook/react';

import ViewArrayOutlined from '../../lib/action/ViewArrayOutlined';

const meta: Meta<typeof ViewArrayOutlined> = {
  component: ViewArrayOutlined,
  tags: ['autodocs'],
  title: 'action/ViewArrayOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewArrayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
