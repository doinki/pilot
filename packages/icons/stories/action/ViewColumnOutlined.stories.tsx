import type { Meta, StoryObj } from '@storybook/react';

import ViewColumnOutlined from '../../lib/action/ViewColumnOutlined';

const meta: Meta<typeof ViewColumnOutlined> = {
  component: ViewColumnOutlined,
  tags: ['autodocs'],
  title: 'action/ViewColumnOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewColumnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
