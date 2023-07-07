import type { Meta, StoryObj } from '@storybook/react';

import TroubleshootOutlined from '../../lib/action/TroubleshootOutlined';

const meta: Meta<typeof TroubleshootOutlined> = {
  component: TroubleshootOutlined,
  tags: ['autodocs'],
  title: 'action/TroubleshootOutlined',
};

export default meta;
type Story = StoryObj<typeof TroubleshootOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
