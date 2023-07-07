import type { Meta, StoryObj } from '@storybook/react';

import PeopleOutlineOutlined from '../../lib/social/PeopleOutlineOutlined';

const meta: Meta<typeof PeopleOutlineOutlined> = {
  component: PeopleOutlineOutlined,
  tags: ['autodocs'],
  title: 'social/PeopleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof PeopleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
