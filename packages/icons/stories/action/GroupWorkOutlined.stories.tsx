import type { Meta, StoryObj } from '@storybook/react';

import GroupWorkOutlined from '../../lib/action/GroupWorkOutlined';

const meta: Meta<typeof GroupWorkOutlined> = {
  component: GroupWorkOutlined,
  tags: ['autodocs'],
  title: 'action/GroupWorkOutlined',
};

export default meta;
type Story = StoryObj<typeof GroupWorkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
