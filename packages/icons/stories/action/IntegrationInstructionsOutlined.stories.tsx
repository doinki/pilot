import type { Meta, StoryObj } from '@storybook/react';

import IntegrationInstructionsOutlined from '../../lib/action/IntegrationInstructionsOutlined';

const meta: Meta<typeof IntegrationInstructionsOutlined> = {
  component: IntegrationInstructionsOutlined,
  tags: ['autodocs'],
  title: 'action/IntegrationInstructionsOutlined',
};

export default meta;
type Story = StoryObj<typeof IntegrationInstructionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
