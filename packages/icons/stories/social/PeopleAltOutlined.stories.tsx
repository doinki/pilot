import type { Meta, StoryObj } from '@storybook/react';

import PeopleAltOutlined from '../../lib/social/PeopleAltOutlined';

const meta: Meta<typeof PeopleAltOutlined> = {
  component: PeopleAltOutlined,
  tags: ['autodocs'],
  title: 'social/PeopleAltOutlined',
};

export default meta;
type Story = StoryObj<typeof PeopleAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
