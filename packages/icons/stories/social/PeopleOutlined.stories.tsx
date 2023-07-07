import type { Meta, StoryObj } from '@storybook/react';

import PeopleOutlined from '../../lib/social/PeopleOutlined';

const meta: Meta<typeof PeopleOutlined> = {
  component: PeopleOutlined,
  tags: ['autodocs'],
  title: 'social/PeopleOutlined',
};

export default meta;
type Story = StoryObj<typeof PeopleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
