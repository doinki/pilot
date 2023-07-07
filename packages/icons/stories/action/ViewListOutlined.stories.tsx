import type { Meta, StoryObj } from '@storybook/react';

import ViewListOutlined from '../../lib/action/ViewListOutlined';

const meta: Meta<typeof ViewListOutlined> = {
  component: ViewListOutlined,
  tags: ['autodocs'],
  title: 'action/ViewListOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewListOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
