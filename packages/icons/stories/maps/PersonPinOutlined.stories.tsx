import type { Meta, StoryObj } from '@storybook/react';

import PersonPinOutlined from '../../lib/maps/PersonPinOutlined';

const meta: Meta<typeof PersonPinOutlined> = {
  component: PersonPinOutlined,
  tags: ['autodocs'],
  title: 'maps/PersonPinOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonPinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
