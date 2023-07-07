import type { Meta, StoryObj } from '@storybook/react';

import ViewInArOutlined from '../../lib/action/ViewInArOutlined';

const meta: Meta<typeof ViewInArOutlined> = {
  component: ViewInArOutlined,
  tags: ['autodocs'],
  title: 'action/ViewInArOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewInArOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
