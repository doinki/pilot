import type { Meta, StoryObj } from '@storybook/react';

import SynagogueOutlined from '../../lib/maps/SynagogueOutlined';

const meta: Meta<typeof SynagogueOutlined> = {
  component: SynagogueOutlined,
  tags: ['autodocs'],
  title: 'maps/SynagogueOutlined',
};

export default meta;
type Story = StoryObj<typeof SynagogueOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
